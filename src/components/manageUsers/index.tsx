/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import GroupsIcon from '@mui/icons-material/Groups'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import InputComponent from '../form/Input'
import SearchIcon from '@mui/icons-material/Search'
import ButtonComponent from '../form/Button'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import Grid from '@mui/material/Grid'
import AddIcon from '@mui/icons-material/Add'
import TableComponent from '../table'
import { Column as TeamColumn } from '../../data/table/teams/columns'
import { Row as TeamRow } from '../../data/table/teams/rows'
import { Columns as EmployeeColumn } from '../../data/table/employees/columns'
import { Row as EmployeeRow } from '../../data/table/employees/rows'

const Title = () => (
  <Box marginTop="12px">
    <Typography variant="body1">Manage Users</Typography>
  </Box>
)

const Stats = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start'
      }}>
      <Box
        sx={{ background: theme.palette.primary.main }}
        width={theme.typography.pxToRem(230)}
        height="auto"
        display="flex"
        marginTop={'12px'}
        borderRadius="5px">
        <Box
          paddingY={'8px'}
          paddingX={'15px'}
          width="100%"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Typography variant="subtitle2" color={'#ffff'}>
              Teams
            </Typography>
            <Typography variant="h3" color={'#ffff'}>
              23
            </Typography>
          </Box>
          <Box
            sx={{
              background: theme.palette.primary.light,
              border: `1px solid ${theme.palette.primary.light}`,
              paddingX: '4px',
              borderRadius: '5px'
            }}>
            <Typography variant="subtitle2" color={'#ffff'}>
              <GroupsIcon />
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Employees */}
      <Box
        sx={{ background: theme.palette.secondary.main }}
        width={theme.typography.pxToRem(230)}
        height="auto"
        display="flex"
        marginTop={'12px'}
        marginLeft={'12px'}
        borderRadius="5px">
        <Box
          paddingY={'8px'}
          paddingX={'15px'}
          width="100%"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Typography variant="subtitle2" color={'#ffff'}>
              Employees
            </Typography>
            <Typography variant="h3" color={'#ffff'}>
              105
            </Typography>
          </Box>
          <Box
            sx={{
              background: theme.palette.secondary.light,
              border: `1px solid ${theme.palette.secondary.light}`,
              paddingX: '4px',
              borderRadius: '5px'
            }}>
            <Typography variant="subtitle2" color={'#ffff'}>
              <GroupsIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const TabPanel = (props: any) => {
//   const { index, value, children, ...other } = props

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}>
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   )
// }

const UserTab = ({ getCurrentTab }: any) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    getCurrentTab(newValue)
  }

  return (
    <Box marginTop={'24px'}>
      <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          selectionFollowsFocus
          TabIndicatorProps={{
            sx: {
              height: '3px'
            }
          }}>
          <Tab sx={{ fontSize: '16px' }} label="Teams" value={0} />
          <Tab
            sx={{ marginLeft: '20px', fontSize: '16px' }}
            label="Employees"
            value={1}
          />
        </Tabs>
      </Box>
    </Box>
  )
}

const SearchAndFilter = ({ currentTab }: any) => (
  <Grid container spacing={1} marginTop={'12px'}>
    <Grid item xs={2}>
      <InputComponent
        variant="outlined"
        placeholder="Search Item"
        startAdornment={true}
        startAdornmentValue={<SearchIcon style={{ height: '17px' }} />}
        fullWidth={true}
        inputBgColor="light"
      />
    </Grid>
    <Grid item xs={2}>
      <ButtonComponent
        variant="outlined"
        startIcon={<FilterAltIcon />}
        size="small"
        sx={{ paddingY: '5px' }}>
        <Typography variant="subtitle2">Filter</Typography>
      </ButtonComponent>
    </Grid>
    <Grid item xs={6} />
    <Grid item xs={2}>
      <ButtonComponent
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        size="small"
        disableElevation
        sx={{ paddingY: '5px' }}>
        <Typography variant="subtitle2">
          Add {currentTab === 0 ? 'Team' : 'Employee'}
        </Typography>
      </ButtonComponent>
    </Grid>
  </Grid>
)

// eslint-disable-next-line react/prop-types
const UsersTable = ({ currentTab }: any) => {
  if (currentTab === 0) {
    return <TeamsTable />
  } else {
    return <EmployeeTable />
  }
}

const TeamsTable = () => (
  <TableComponent viewAction={false} columns={TeamColumn} data={TeamRow} />
)

const EmployeeTable = () => (
  <TableComponent
    viewAction={true}
    columns={EmployeeColumn}
    data={EmployeeRow}
  />
)

/* <Stat></Stat>
   <UsersTab></UsersTab>
   <UsersTable></UsersTable> 
   <SearchandFilter />   
*/

const ManageUsers = () => {
  const [currentTab, setCurrentTab] = React.useState(0)

  const getCurrentTab = (val: number) => {
    setCurrentTab(val)
  }
  return (
    <>
      <Title />
      <Stats />
      <UserTab getCurrentTab={getCurrentTab} />
      <SearchAndFilter currentTab={currentTab} />
      <UsersTable currentTab={currentTab} />
    </>
  )
}

export default ManageUsers
