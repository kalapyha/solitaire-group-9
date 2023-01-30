import React, { useState, Suspense } from 'react';
import { styled } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const CloseModal = React.lazy(() => import('../../CloseModal/CloseModal'));

type NavigationProps = {
    open: boolean;
};

const StyledList = styled(List)(() => ({
    '& a': {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)',
    },
}));

const Navigation = ({ open }: NavigationProps): JSX.Element => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <StyledList>
                <Link to="/">
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Home'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/settings">
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Settings'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/instructions">
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <MenuBookIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Instructions'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </StyledList>
            <Divider />
            <List>
                {/* TODO show modal with confirm dialog and close if Ok use CONTEXT! */}
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        onClick={() => setOpenModal(true)}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Suspense fallback={<div>Loading...</div>}>
                <CloseModal open={openModal} handleClose={() => setOpenModal(false)} />
            </Suspense>
        </>
    );
};

export default Navigation;
