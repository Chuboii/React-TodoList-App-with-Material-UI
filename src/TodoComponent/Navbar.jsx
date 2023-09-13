import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { UseData } from './DataContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



function todos(){
    let stored = localStorage.getItem("todos")
    return stored ? JSON.parse(stored) : []
}

function deletedtodos(){
  let stored = localStorage.getItem("checked")
  return stored ? JSON.parse(stored) : []
}

function getDeleted(){
  let stored = localStorage.getItem("deleted")
  return stored ? JSON.parse(stored) : []
}


function deletedtodos2(){
let stored = localStorage.getItem("checked")
return stored ? JSON.parse(stored) : []
}

function getDeleted2(){
let stored = localStorage.getItem("deleted")
return stored ? JSON.parse(stored) : []
}

export default function Navbar() {
  let [value, setValue] = React.useState('')
  let {data} = UseData()

  let {setSearchValue} = UseData()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  let getValues = (e) =>{
    setValue(e.target.value)
  }

  React.useEffect(()=>{
setSearchValue(value)

  }, [value, setSearchValue])


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{position:'fixed', top:"0"}}
      
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    <Link to={"./addtodos"}>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge color="error">
            <EditIcon />
          </Badge>
        </IconButton>
        <p>Add Todos</p>
      </MenuItem>
      </Link>

      <Link to={"/todos"}>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={todos().length} color="error">
          <RemoveRedEyeIcon/>
          </Badge>
        </IconButton>
        <p>View Todos</p>
      </MenuItem>
</Link>

<Link to={"./checkedtodos"}>
      <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={deletedtodos().length} color="error">
         <FactCheckIcon/>
        </Badge>
      </IconButton>
      <p>Checked Todos</p>
    </MenuItem>
</Link>

<Link to={"./deletedtodos"}>
    <MenuItem>
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={getDeleted().length} color="error">
        <DeleteSweepIcon/>
      </Badge>
    </IconButton>
    <p>Deleted Todos</p>
  </MenuItem>
  </Link>

  <Link to={"./profile"}>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
  <AccountCircle/>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{position:'fixed', top:"0", zIndex:"1"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: {xs:"none" ,sm: 'block' } }}
          >
          KBS
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search through..."
              inputProps={{ 'aria-label': 'search' }}
              
              onChange={getValues}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box className='box' sx={{ display: { xs: 'none', md: 'flex' } }} >
          <Link to={"/addtodos"}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  color="error">
                <EditIcon />
              </Badge>
            </IconButton>
            </Link>

            <Link to={'/todos'}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={data.length} color="error">
              <RemoveRedEyeIcon/>
            </Badge>
          </IconButton>
</Link>

<Link to={"/checkedtodos"}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={deletedtodos2().length} color="error">
            <FactCheckIcon/>
          </Badge>
        </IconButton>
  </Link>

  <Link to={"/deletedtodos"}>
        <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={getDeleted2().length} color="error">
                <DeleteSweepIcon/>
              </Badge>
            </IconButton>
</Link>

<Link to={'/profile'}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
