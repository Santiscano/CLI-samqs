
export const createItemsListSidebar = () => {
  const data = `import { FC, MouseEvent, ReactNode, cloneElement, useState } from 'react';

import { Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import { HiOutlineChevronDown, HiOutlineChevronRight } from 'react-icons/hi';

import { session } from '../../../../components/config/SessionSettings';
import { useLayoutContext } from '../../../../context/LayoutContext';
import { usePathname } from '../../../../hooks/routes/usePathName';
import { WithRoleAllowedRoutes } from '../../../../middlewares/WithRoleAllowed';


const fontsizeText = ".8rem";
const fontsizeTextLight = ".6rem";
const widthIcon = 24;
const sxIconGlobal = { minWidth: 'auto', mr: 1, fontSize: widthIcon };

type dataType = {
  name: string;
  path: string;
  icon: ReactNode;
};
interface ItemsListProps {
  data: dataType[];
  isPublic?: boolean;
  allowedRoles?: number[];
};

/**
 *
 * @param param0
 * @returns
 * @example
    <ItemsList
      data={[
        {
          name: 'example without',
          path: '/dashboard',
          icon: <HiOutlineChartBar/>
        },
        {
          name: 'example without 2',
          path: '/dashboard/test3',
          icon: <HiOutlineChartSquareBar  />
        }
      ]}
    />
 */
export const ItemsList: FC<ItemsListProps> = (
  { data, isPublic = true, allowedRoles = [] }
) => {
  const theme = useTheme();

  const textColorPrimary = theme.palette.primary.main;
  const textColorSecondary = theme.palette.text.secondary;
  const navigate = useNavigate();
  const handleRouteValidate = (url: string) => {
    !!session()
      ? navigate(\`\${url}\`)
      : navigate("/400");
  };

  const pathname = usePathname();
  const { openSidebar } = useLayoutContext();

  const renderList = (
    <List>
      {data.map((list) => {
        const active = list.path === pathname;
        return (
          <ListItem key={list.name} disablePadding>
            <ListItemButton
              onClick={() => handleRouteValidate(list.path)}
              sx={{
                minHeight: 44,
                borderRadius: 0.75,
                typography: 'caption',
                fontSize: fontsizeText,
                marginTop: "5px",
                color: 'text.secondary',
                textTransform: 'capitalize',
                fontWeight: 'fontWeightMedium',
                paddingX: 1,
                ...(active && {
                  color: 'primary.main',
                  fontWeight: 'fontWeightSemiBold',
                  bgcolor: () => alpha(textColorPrimary, 0.08),
                  '&:hover': {
                    bgcolor: () => alpha(textColorSecondary, 0.08),
                  },
                }),
                ...(!openSidebar && {
                  display: 'flex',
                  flexDirection: 'column',
                  padding: "1px",
                }),
              }}
            >
              <ListItemIcon sx={sxIconGlobal}>
                {/* @ts-ignore */}
                {cloneElement(list.icon, {
                  style: { color: active ? textColorPrimary : textColorSecondary }
                })}
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle2" sx={{ fontSize: openSidebar ? fontsizeText : fontsizeTextLight }}>
                  {list.name}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  );

  return (
    <>
      {isPublic ? (
        <>{renderList}</>
      ) : (
        <WithRoleAllowedRoutes allowedRolesList={allowedRoles}>
          {renderList}
        </WithRoleAllowedRoutes>
      )}
    </>
  )
};




// *============================== Collapsed *============================== //
interface CollapsabledItemsListProps {
  open: boolean;
  handleOpen: () => void;
  section: string;
  iconSection: JSX.Element;
  data: dataType[];
  isPublic?: boolean;
};

/**
 *
 * @param param0
 * @returns
 * @example
 * <CollapsibledItemsList
      open={false}
      handleOpen={() => setOpen(prev => !prev)}
      data={[
        {
          name: 'example-config',
          path: '/dashboard/test',
          icon: <HiOutlineBeaker />
        },
        {
          name: 'example-two',
          path: '/dashboard/test2',
          icon: <HiOutlineBookOpen />
        }
      ]}
 * />
 */
export const CollapsibledItemsList: FC<CollapsabledItemsListProps> = (
  { open, handleOpen, section, iconSection, data, isPublic = true }
) => {
  const theme = useTheme();
  const textColorPrimary = theme.palette.primary.main;
  const textColorSecondary = theme.palette.text.secondary;
  const sxIcon = { ...(sxIconGlobal), color: textColorSecondary };
  const sxText = { color: textColorSecondary };

  const navigate = useNavigate();
  const handleRouteValidate = (url: string) => {
    !!session() ? navigate(\`\${url}\`) : navigate("/400");
  };

  const pathname = usePathname();
  const { openSidebar } = useLayoutContext();

  const isActive = pathname.includes(section.toLowerCase());

  // *popover
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (e: MouseEvent<HTMLElement>) => {
    console.log('entro');
    setAnchorEl(e.currentTarget);
  }
  const handlePopoverClose = () => {
    console.log('salio')
    setAnchorEl(null)
  };

  const openPopover = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // *popover


  // *================= renders =================* //
  const renderData = (
    <>
      {data.map((list) => {
        const active = list.path === pathname;
        return (
          <ListItem key={list.name} disablePadding>
            <ListItemButton
              onClick={() => handleRouteValidate(list.path)}
              sx={{
                ml: openSidebar ? 2 : 0,
                minHeight: 44,
                paddingX: openSidebar ? 2 : 5,
                borderRadius: 0.75,
                typography: 'body2',
                fontSize: fontsizeText,
                marginTop: "5px",
                color: 'text.secondary',
                textTransform: 'capitalize',
                fontWeight: 'fontWeightMedium',
                ...(active && {
                  color: 'primary.main',
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              <Box sx={{ mr: "16px" }}>
                <Box component="section" sx={{
                  p: active ? "3px" : "2px",
                  backgroundColor: active ? "primary.main" : "text.secondary",
                  borderRadius: '50%',
                }}></Box>
              </Box>

              <ListItemText>
                <Typography
                  variant='subtitle2'
                  sx={{ fontSize: fontsizeText }}
                >
                  {list.name}
                </Typography>
              </ListItemText>

            </ListItemButton>
          </ListItem>
        )
      })}
    </>
  )

  const renderCollapsedList = (
    <List>

      <ListItemButton
        onClick={openSidebar ? handleOpen : handlePopoverOpen}
        sx={{
          borderRadius: .75,
          fontSize: fontsizeText,
          marginTop: "5px",
          color: 'text.secondary',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          ...(isActive && {
            color: textColorPrimary,
            fontWeight: 'fontWeightSemiBold',
            bgcolor: () => alpha(textColorPrimary, 0.08),
            '&:hover': {
              bgcolor: () => alpha(textColorPrimary, 0.08),
            },
          }),
          ...(!openSidebar && {
            display: 'flex',
            flexDirection: 'column',
            padding: "1px",
          }),
        }}
      // onCl={!openSidebar ? handlePopoverOpen : undefined}
      // onMouseLeave={!openSidebar ? handlePopoverClose : undefined}
      >
        <ListItemIcon sx={sxIconGlobal}>
          {/* @ts-ignore */}
          {cloneElement(iconSection, {
            style: { color: isActive ? textColorPrimary : textColorSecondary }
          })}
        </ListItemIcon>
        <ListItemText sx={sxText} >
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: openSidebar ? fontsizeText : fontsizeTextLight,
              color: isActive ? textColorPrimary : textColorSecondary
            }}
          >
            {section}
          </Typography>
        </ListItemText>
        {openSidebar && (
          <>
            {open ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
          </>
        )}
      </ListItemButton>

      {openSidebar ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {renderData}
        </Collapse>
      ) : (
        <Popover
          id={id}
          open={openPopover}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left'
          }}
          slotProps={{
            paper: {
              style: {
                marginLeft: '5px', // Ajusta la cantidad de píxeles que deseas mover el Popover hacia la derecha
              },
            },
          }}

        >
          {renderData}
        </Popover>
      )}
    </List>
  );

  return (
    <>
      {isPublic ? (
        <>{renderCollapsedList}</>
      ) : (
        <WithRoleAllowedRoutes allowedRolesList={[]}>
          {renderCollapsedList}
        </WithRoleAllowedRoutes>
      )}
    </>
  )
};



`;
  return data;
}
