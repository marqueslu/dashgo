import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { Logo } from './Logo'
import { SearchBox } from './SearchBox'

export function Header() {
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
      <Logo />
      {isWideVersion && <SearchBox /> }
      <Flex align="center" marginLeft="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
