import appConfigColors from '../config.json'
import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React from 'react';
import { useRouter } from 'next/router';


//api.github.com/users/vandroy77
export default function PaginaInicial() {
  //const usernamea= 'vandroy77';

  const [username, setUsername] = React.useState('vandroy77');
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfigColors.theme.colors.primary['000'],
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_960_720.jpg)',
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
            boxShadow: '5px 10px 10px 10px rgb(0 0 0 / 40%)',
            // backgroundColor: appConfigColors.theme.colors.neutrals["000"],
            backgroundColor:' rgb(0 0 0 / 5%)'
            
          }}
        >

          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              // salvar o nome do usuario na url 
              //`` < template string
              roteamento.push(`/chat?username=${username}`);
              // window.location.href = '/chat';
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >

            <Text tag="h2" style={{ fontSize: '24px' }} >
              Boas vindas de volta!</Text>

            <Button label='Acesse meu Github - vandroy77' style={{
              width: 250,
              backgroundColor: 'White',
              color: 'black',
              alignSelf: 'Center',
              borderRadius: 20,
              borderWidth: 5,
              marginBottom: 15,
              marginTop: 15,
              padding: 5,
              borderColor: '#fff'

            }}
              onClick={() => { return window.open("http://www.github.com/vandroy77", "_blank") }}>

            </Button>

            {/*
              <input type= "text"
              value = {username} 
              onChange={function (change) {
                
                console.log(change)
                setUsername(change.target.value)
              }}
              />
              */}

            <TextField
              placeholder='Insira seu Usuário'
              onChange={function (change) {
                if (change.target.value.length > 2) {
                  setUsername(change.target.value)
                }

              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfigColors.theme.colors.primary[905],
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
            {/*
            <Text styleSheet={{ marginTop: '32px',
             color: appConfigColors.theme.colors.neutrals["999"],
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             maxWidth: '200px',
             padding: '10px'
            justifyContent: 'space-between'}}>
              followers
              user
            </Text>
            */}

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
                backgroundColor: appConfigColors.theme.colors.neutrals[200],
                // border: '5px solid',
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
                onError={({ currentTarget }) => {
                  currentTarget.src = "https://previews.123rf.com/images/lovedoves/lovedoves1608/lovedoves160800144/60932368-isometric-illustration-pixel-art-8-bit-for-website-page-not-found-404-error-and-colorful-dinosaur-is.jpg?fj=1";


                }}

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
      </Box >
    </>
  );
}
