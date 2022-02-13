import { Box, Text, TextField, Image, Button, Icon } from '@skynexui/components';
import { useRouter } from 'next/router';
import React from 'react';
import appConfig from '../config.json';
import appConfigColors from '../config.json'
import { createClient } from '@supabase/supabase-js';
import { ButtonSendSticker } from '../src/components/ButtonSendSticker'
import { AiFillCaretRight } from 'react-icons/ai';
import { ImExit } from 'react-icons/im'

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzkzMTY4NywiZXhwIjoxOTU5NTA3Njg3fQ.9g3y44OBDhcqm_qoKsqzFny3vYnfmx81PxJsQ4C9W0c"
const SUPABASE_URL = 'https://nzhwfmafrxzpjgajstsj.supabase.co'
const SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default function ChatPage() {
    const [mensagem, SetMensagem] = React.useState('')
    const [ListaDeMensagens, SetListadeMensagens] = React.useState([])

    const roteamento = useRouter()
    const userLogado = roteamento.query.username

    // acessando a tabela
    // esse codigo sem o UseEffect vai acionar cada vez que eu digitar, na verdade, preciso controlar-lo
    //quando ele deve ser disparado

    React.useEffect(() => {
        SupabaseClient.from('mensagens')
            .select('*')
            .order('id', { ascending: false })
            .then(({ data }) => {
                SetListadeMensagens(data)
            })
    }, [])


    function handleNovaMensagem(NovaMensagem) {
        const mensagens = {
            id: ListaDeMensagens.length + 1,
            usuario: userLogado,
            texto: NovaMensagem,


        };

        SupabaseClient.from('mensagens')
            .insert([mensagens])
            .then(({ data }) => {
                console.log('mensagem registdada no banco de dados:', data[0])
                // o valor passado na lista de mensagens deve ser uma ARRAY []
                SetListadeMensagens([
                    data[0],
                    ...ListaDeMensagens,]
                )
            })

        // remover mensagens asssim que por em selistademensagens
        SetMensagem('')
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_960_720.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '5px 10px 10px 10px rgb(0 0 0 / 40%)',
                    borderRadius: '10px', // arredondamento das bordas
                    // backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList ListaMensagens={ListaDeMensagens} />

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                const valor = event.target.value
                                SetMensagem(valor)
                            }}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault()
                                    console.log(mensagem)
                                    handleNovaMensagem(mensagem)

                                }
                            }}

                            placeholder="Insira sua mensagem aqui..."
                            type="textArea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        {/* botao de enviar mensagem*/}
                        <Button styleSheet={{
                            margin: '0 15px',
                            border: '0',
                            borderRadius: '5px',
                            minWidth: '70px',
                            minHeight: '55px',
                            color: 'white',

                            backgroundColor: appConfig.theme.colors.primary[905],
                        }}
                            variant='primary'
                            colorVariant='positive'

                            onClick={() => {
                                if (mensagem != '') {
                                    handleNovaMensagem(mensagem)
                                }
                            }}
                            label={<AiFillCaretRight size={30} />}
                        >

                        </Button>


                        <ButtonSendSticker
                            onStickerClick={(sticker) => {
                                // stikcer é a url
                                handleNovaMensagem(':sticker:' + sticker)
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {

    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5' >
                    Chat
                </Text>
                <Button
                    styleSheet={{ color: appConfigColors.theme.colors.neutrals["100"], width: '140px' }}
                    variant='tertiary'
                    colorVariant='positive'
                    label={<Text variant='heading3' styleSheet={{ padding: '0', fontSize: '18px' }}>Logout      <ImExit style={{ textAlign: "end" }} /></Text>}
                    href="/"
                />

            </Box>
        </>
    )
}

function MessageList(props) {

    return (
        <Box
            tag="ul"
            styleSheet={{
                overflowY: 'scroll',

                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
                scrollbarColor: appConfig.theme.colors.neutrals["000"],

            }}
        >
            {props.ListaMensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',

                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >  
                    
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                                display: 'flex',
                                alignItems:'center',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    marginRight: '8px',
                                    display: "inline-block",
                                }}
                                src={`https://github.com/${mensagem.usuario}.png`}
                            />
                            <Text tag="strong" >
                                {mensagem.usuario}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {mensagem.texto.startsWith(":sticker:") ? (
                            <Image src={mensagem.texto.replace(':sticker:', '')}
                                styleSheet={{
                                    height: '100px',
                                }}
                            />
                        )
                            : (
                                mensagem.texto
                            )
                        }
                    </Text>
                )
            })}

        </Box>
    )
}