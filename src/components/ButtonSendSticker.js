import React from 'react';
import { Box, Button, Text, Image } from '@skynexui/components';
import localData from '../../config.json';
import { transform } from '@babel/core';


export function ButtonSendSticker({ onStickerClick }) {
    const [isOpen, setOpenState] = React.useState('');
    const [Emotes, setEmotes] = React.useState(0)
    
    return (
        <Box
            styleSheet={{
                position: 'relative',
            }}
        >
            <Button
            
                styleSheet={{

                    minWidth: '55px',
                    minHeight: '55px',
                    display: 'flex',
                    fontWeight: "300",
                    color: "white",
                }}
                
                buttonColors={{
                    contrastColor: localData.theme.colors.neutrals["050"],
                    mainColor: localData.theme.colors.primary[500],
                    mainColorLight: localData.theme.colors.primary[400],
                    mainColorStrong: localData.theme.colors.primary[600],
                }}
            
                variant='secondary'
                colorVariant='warning'

                label={<Text styleSheet={{fontSize:'20px'}}>{localData.RandomEmotes[Emotes]}</Text>}


                onClick={() => setOpenState(!isOpen)}

                onMouseEnter={() => {
                   
                    setEmotes(Math.floor(Math.random() * (localData.RandomEmotes.length - 1 + 1)))
                    DataTransferItem
                    console.log(Emotes)
                }}
               
               >
            </Button>
            {isOpen && (
                <Box
                    styleSheet={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '5px',
                        position: 'absolute',
                        backgroundColor: localData.theme.colors.neutrals[800],
                        width: {
                            xs: '200px',
                            sm: '290px',
                        },
                        height: '300px',
                        right: '30px',
                        bottom: '30px',
                        padding: '16px',
                        boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
                    }}
                    onClick={() => setOpenState(false)}
                >
                    <Text
                        styleSheet={{
                            color: localData.theme.colors.neutrals["000"],
                            fontWeight: 'bold',
                            marginBottom: '12px'
                        }}
                    >
                        Stickers
                    </Text>
                    <Box
                        tag="ul"
                        styleSheet={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            flex: 1,
                            paddingTop: '16px',
                            overflow: 'scroll',
                        }}
                    >
                        {localData.stickers.map((sticker) => (
                            <Text
                                onClick={() => onStickerClick(sticker)
                                
                                }
                                tag="li" key={sticker}
                                styleSheet={{
                                    width: '50%',
                                    borderRadius: '5px',
                                    padding: '10px',
                                    focus: {
                                        backgroundColor: localData.theme.colors.neutrals[600],
                                    },
                                    hover: {
                                        backgroundColor: localData.theme.colors.neutrals[600],
                                    }
                                }}
                            >
                                <Image src={sticker} />
                            </Text>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    )
}