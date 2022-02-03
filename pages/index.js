import appConfigColors from '../config.json'
import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React, { useState } from 'react';
import { useRouter } from 'next/router';


function Title(props) {
  // console.log(props)
  const Tag = props.tag || "h1";
  return (
    <>
      {/*colocar em chaves, consigo receber as informações no tag title caso contrário vai ser apenas um texto*/}
      <Tag>{props.children}</Tag>

      <style jsx>{`
            ${Tag} {
                color: ${appConfigColors.theme.colors.neutrals['999']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

//api.github.com/users/vandroy77
export default function PaginaInicial() {
  //const username = 'vandroy77';

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
            //border: 'px solid rgb(0 0 0 / 5%)',
            // borderColor: appConfigColors.theme.colors.neutrals["999"],
            boxShadow: '5px 10px 10px 0 rgb(0 0 0 / 40%)',

            // backgroundColor: appConfigColors.theme.colors.neutrals["000"],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log('Alguém submeteu o form');
              roteamento.push('/chat');
              // window.location.href = '/chat';
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfigColors.theme.colors.neutrals["999"] }}>
              {appConfigColors.name}
            </Text>
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
              //backgroundColor: appConfigColors.theme.colors.neutrals[200],
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
      </Box>
    </>
  );
}
