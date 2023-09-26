import { Avatar, Box, Divider, IconButton, Stack, Switch, styled, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons } from "../../data";
import useSettings from '../../hooks/useSettings'
import { Gear } from "phosphor-react";
import { faker } from '@faker-js/faker';

const DashboardLayout = () => {

  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings()

  // const AntSwitch = styled(Switch)(({ theme }) => ({
  //   width: 40,
  //   height: 20,
  //   padding: 0,
  //   display: 'flex',
  //   '&:active': {
  //     '& .MuiSwitch-thumb': {
  //       width: 15,
  //     },
  //     '& .MuiSwitch-switchBase.Mui-checked': {
  //       transform: 'translateX(9px)',
  //     },
  //   },
  //   '& .MuiSwitch-switchBase': {
  //     padding: 2,
  //     '&.Mui-checked': {
  //       transform: 'translateX(20px)',
  //       color: '#fff',
  //       '& + .MuiSwitch-track': {
  //         opacity: 1,
  //         backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
  //       },
  //     },
  //   },
  //   '& .MuiSwitch-thumb': {
  //     boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
  //     width: 16,
  //     height: 16,
  //     borderRadius: 6,
  //     transition: theme.transitions.create(['width'], {
  //       duration: 200,
  //     }),
  //   },
  //   '& .MuiSwitch-track': {
  //     borderRadius: 20 / 2,
  //     opacity: 1,
  //     backgroundColor:
  //       theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
  //     boxSizing: 'border-box',
  //   },
  // }));

  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Stack direction={'row'} height={'100vh'} sx={{
        overflow: 'hidden'
      }}>

        <Box sx={{
          backgroundColor: theme.palette.background.paper,
          height: "100vh",
          width: 100,
          boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
          padding: 2
        }}>
          <Stack direction={"column"} alignItems={"center"} spacing={5} sx={{ height: '100%' }}>

            <Box sx={{
              backgroundColor: '#AFBBF7',
              height: 60,
              width: 60,
              borderRadius: 1,
            }}>
              <img src={Logo} alt="Chat App Logo" />
            </Box>
            <Stack alignItems={'center'} sx={{ height: '100%' }} justifyContent={'space-between'}>

              <Stack spacing={3}>
                {
                  Nav_Buttons.map(el => (
                    el.index === selected ?
                      (

                        <Box sx={{
                          backgroundColor: '#5B96F7',
                          height: 45,
                          width: 45,
                          borderRadius: 1
                        }}
                        >
                          <Stack>

                            <IconButton onClick={() => setSelected(el.index)} sx={{ color: '#fff' }}>{el.icon}</IconButton>
                          </Stack>
                        </Box>
                      )
                      : (<Box sx={{
                        backgroundColor: theme.palette.background.paper,
                        height: 45,
                        width: 45,
                        borderRadius: 1
                      }}>
                        <Stack>

                          <IconButton onClick={() => setSelected(el.index)}>{el.icon}</IconButton>
                        </Stack>
                      </Box>)


                  ))
                }
                <Divider orientation="horizontal" />
                {
                  selected === 3 ? <Box sx={{
                    backgroundColor: '#5B96F7',
                    height: 45,
                    width: 45,
                    borderRadius: 1
                  }}>
                    <Stack>

                      <IconButton sx={{
                        color: '#fff'
                      }} onClick={() => setSelected(3)}>
                        <Gear />
                      </IconButton>
                    </Stack>
                  </Box> : <IconButton onClick={() => setSelected(3)}>
                    <Gear />
                  </IconButton>
                }
              </Stack>
              <Stack alignItems={'center'} spacing={3}>
                <Switch onChange={() => {
                  onToggleMode()
                }} defaultChecked />
                <Avatar src={faker.image.avatar()} />
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
