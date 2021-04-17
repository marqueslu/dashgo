import { Flex, IconButton, useBreakpointValue, Icon } from '@chakra-ui/react'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { Logo } from './Logo'
import { SearchBox } from './SearchBox'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth="1480px"
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      {
        !isWideVersion && (
          <IconButton
            aria-label="Open Navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            marginRight="2">

          </IconButton>
        )
      }
      <Logo />
      {isWideVersion && <SearchBox /> }
      <Flex align="center" marginLeft="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
