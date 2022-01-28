import appConfigColors from  '../config.json'
import {Box, Button, Text, TextField, Image} from '@skynexui/components'

function GlobalStyle(){
    return (
         /*global CSS*/
        <style global jsx>{`
            *{
                margin:0;
                padding:0;
                box-sizing: border-box;
                list-style: none;
            }
            body{
                font-family: 'Open Sans',sans-serif;   
            }
            /*app ajuste altura*/
            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex: 1
            }
            #__next {
                flex: 1
            }
            #__next > * {
                flex: 1
            }

        `}</style>
    );
}


function Title(props) {
    console.log(props)
    const Tag = props.tag || "h1";
    return (
        <>
        {/*colocar em chaves, consigo receber as informações no tag title caso contrário vai ser apenas um texto*/}
            <Tag>{props.children}</Tag>

            <style jsx>{`
            ${Tag} {
                color: ${appConfigColors.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
    );
}


export default function PaginaInicial() {
    const username = 'vandroy77';
   // const [username, setUsername] = React.useState('vandroy77');
   // const roteamento = useRouter();
    return (
      <>
        <GlobalStyle/>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfigColors.theme.colors.primary[500],
            backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfigColors.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                console.log('Alguém submeteu o form');
               // roteamento.push('/chat');
                // window.location.href = '/chat';
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfigColors.theme.colors.neutrals[300] }}>
                {appConfigColors.name}
              </Text>
  
              {/* <input
                              type="text"
                              value={username}
                              onChange={function (event) {
                                  console.log('usuario digitou', event.target.value);
                                  // Onde ta o valor?
                                  const valor = event.target.value;
                                  // Trocar o valor da variavel
                                  // através do React e avise quem precisa
                                  setUsername(valor);
                              }}
                          /> */}
              <TextField
                value={username}
                onChange={function (event) {
                  console.log('usuario digitou', event.target.value);
                  // Onde ta o valor?
                  const valor = event.target.value;
                  // Trocar o valor da variavel
                  // através do React e avise quem precisa
                  setUsername(valor);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfigColors.theme.colors.neutrals[200],
                    mainColor: appConfigColors.theme.colors.neutrals[900],
                    mainColorHighlight: appConfigColors.theme.colors.primary[500],
                    backgroundColor: appConfigColors.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfigColors.theme.colors.neutrals["000"],
                  mainColor: appConfigColors.theme.colors.primary[500],
                  mainColorLight: appConfigColors.theme.colors.primary[400],
                  mainColorStrong: appConfigColors.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfigColors.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfigColors.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfigColors.theme.colors.neutrals[200],
                  backgroundColor: appConfigColors.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }
