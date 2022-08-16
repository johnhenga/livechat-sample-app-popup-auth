import React from 'react'
import GitHubIcon from 'assets/GitHubIcon'

const AppInfo = () => {
  return (
    <div className="app-description">
      Good to know:
      <ul>
        <li>
          📱 This is a sample app that demonstrates how to implement the popup/redirect authorization flow from the
          <a
            href="https://developers.livechat.com/docs/authorization/sign-in-with-livechat"
            target="_blank"
            rel="noopener noreferrer"
          >
            LiveChat Accounts SDK
          </a>
          .
        </li>
        <li>
          <GitHubIcon /> The app lives on
          <a href="https://github.com/livechat/sample-app-popup-auth" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </li>
        <li>
          📝 For use cases on when to use the popup flow, read our
          <a href="https://developers.livechat.com/updates/" target="_blank" rel="noopener noreferrer">
            blog post
          </a>
          .
        </li>
        <li>
          💡 Feel free to use this app as a template to build a more advanced solution. Lack inspiration? See some
          <a href="https://developers.livechat.com/app-ideas/" target="_blank" rel="noopener noreferrer">
            App Ideas
          </a>
          .
        </li>
      </ul>
    </div>
  )
}

export default AppInfo
