import { createRoot } from 'react-dom/client'

import App from 'pages/Main'

import 'styles/app.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
