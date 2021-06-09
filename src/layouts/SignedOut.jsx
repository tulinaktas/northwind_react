import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) { //SignedOut(props) --> destruction
    return (
        <div>
            <Menu.Item>
                <Button primary style={{marginRight:'0.5em'}} onClick={signIn} >Giriş Yap</Button>
                <Button primary>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
