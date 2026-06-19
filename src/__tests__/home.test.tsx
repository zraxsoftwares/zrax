import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "@/components/ThemeProvider"
import Home from "@/app/page"

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

describe("Home page", () => {
  it("renders all major sections", () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument()
    expect(screen.getAllByText(/Get Started/).length).toBeGreaterThanOrEqual(3)
  })

  it("renders navigation links", () => {
    renderWithTheme(<Home />)

    expect(screen.getAllByText("About").length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText("Services").length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText("Portfolio").length).toBeGreaterThanOrEqual(2)
  })

  it("renders the company logo alt text", () => {
    renderWithTheme(<Home />)

    const logos = screen.getAllByAltText("ZRAX SOFTWARES")
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })
})
