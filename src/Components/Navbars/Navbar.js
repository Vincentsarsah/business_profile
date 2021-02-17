import React from 'react';
import '../Css/Style.css'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItemText from '@material-ui/core/ListItemText';
import Homepage from '../HomePage/Homepage';
import { Button, Navbar, Nav, NavDropdown} from 'react-bootstrap'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundImage: 'linear-gradient(rgb(69, 22, 123), rgb(10, 26, 243))',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    overflowX: 'hidden',
    backgroundImage: 'linear-gradient(rgb(10, 26, 243), rgb(69, 22, 123))',
    color: 'white',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3), 
    backgroundColor: 'rgb(230, 231, 245)'
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            ABC Electronics
          </Typography>
          <div className = "nav_links">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"  className ="nav_background">
                  <Nav className="mr-auto ">
                    <Nav.Link href="#features" className = 'nav_links'>Features</Nav.Link>
                    <Nav.Link href="#pricing"  className = 'nav_links'>Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown" >
                      <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2" >Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets"  className = 'nav_links'>More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes"  className = 'nav_links'>
                      Dank memes
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
          </div>
         
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        
        <List>
            <AccountCircleIcon className="profile_icon" />
          {['Vincent Andoh Sarsah', 'vincent.sarsah@amalitech.com', '(233)-262-756-294', 'www.amalitech.org'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
        <List>
          {['Takoradi', 'Western Region', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
            <Homepage/>
        </div>
      </main>
    </div>
  );
}
