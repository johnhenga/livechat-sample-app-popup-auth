import { useState } from 'react'
import AccountsSDK from '@livechat/accounts-sdk'
import { Config } from 'lib/config'

type UserIdentity = {
  account_id: string
  access_token: string
  expires_in: number
  organization_id: string
  scope: string
  token_type: 'Bearer'
}

const accountsSDK = new AccountsSDK({
  client_id: Config.lcClientId,
  server_url: Config.lcAccountsURL,
})

function useUserIdentity() {
  const [userIdentity, setUserIdentity] = useState<UserIdentity | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const authorize = () => {
    setLoading(true)
    accountsSDK
      .popup()
      .authorize()
      .then(setUserIdentity)
      .finally(() => setLoading(false))
  }

  const logout = () => {
    if (userIdentity) {
      fetch(`${Config.lcAccountsURL}/v2/sessions`, {
        method: 'DELETE',
        body: '{}',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${userIdentity.token_type} ${userIdentity.access_token}`,
        },
      }).then((response) => {
        setUserIdentity(null)
        return response.json()
      })
    }
  }

  return { userIdentity, authorize, logout, loading }
}

export default useUserIdentity
