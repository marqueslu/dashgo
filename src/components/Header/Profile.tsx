import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Lucas Marques</Text>
          <Text color="gray.300" fontSize="small">
            lucas.msilva09@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lucas Marques"
        src="https://github.com/marqueslu.png"
      />
    </Flex>
  )
}
