import { useMediaQuery, Box, Drawer, Stack } from '@mui/material';
import Logo from '../../../components/logo/Logo';
import SidebarItems from './SidebarItems';

const Sidebar = (props) => {

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const sidebarWidth = '270px';

  if (lgUp) {
    return (
      // Sidebar for desktop
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={props.isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Box
            sx={{
              height: '100%',
            }}
          >
            <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}></Stack>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Logo />
            </Box>
            <Box>
              <SidebarItems />
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    // Sidebar For Mobile
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}></Stack>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Logo />
      </Box>
      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;
