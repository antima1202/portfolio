import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'
import { CommandPaletteProvider } from './providers/CommandPaletteProvider'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider>
      <CommandPaletteProvider>
        <RouterProvider router={router} />
      </CommandPaletteProvider>
    </ThemeProvider>
  )
}
