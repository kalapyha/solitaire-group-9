import React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Undo from '@mui/icons-material/Undo';
import SwitchDayNight from './components/SwitchDayNight';
import Reset from './components/Reset';
import Score from './components/Score';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Board from '../Board/Board';
import Settings from '../Settings/Settings';
import Instructions from '../Instructions/Instructions';
import { useDispatch, useSelector } from 'react-redux';
import { history, undo } from '../../features/tableauSlice';

const drawerWidth = 240;

const openedMixin = (): CSSObject => ({
    width: drawerWidth,
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(),
        '& .MuiDrawer-paper': openedMixin(),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const hasUndoMove = useSelector(history);
    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color="default">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Box display="flex" alignItems="center">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="body1" noWrap component="div" mr={2}>
                            Solitaire Game by group #9
                        </Typography>
                        <Divider
                            orientation="vertical"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.12)',
                                height: '30px',
                                width: '1px',
                                marginRight: '16px',
                            }}
                        />
                        <Score />
                        <IconButton
                            color="primary"
                            aria-label="undo move"
                            // TODO nick undoe history move dispatch here
                            disabled={!hasUndoMove.length}
                            onClick={() => dispatch(undo())}
                            edge="start"
                            sx={{
                                marginLeft: 2,
                            }}
                        >
                            <Undo />
                        </IconButton>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Reset />
                        <Divider
                            orientation="vertical"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.12)',
                                height: '30px',
                                width: '1px',
                                marginRight: '16px',
                                marginLeft: '16px',
                            }}
                        />
                        <SwitchDayNight />
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Navigation open={open} />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <DrawerHeader />

                <Routes>
                    <Route path="/settings" element={<Settings />}></Route>
                    <Route path="/instructions" element={<Instructions />}></Route>
                    <Route path="/" element={<Board />}></Route>
                </Routes>
            </Box>
        </Box>
    );
}
