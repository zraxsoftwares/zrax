import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("Home page", () => {
  it("renders all major sections", () => {
    render(<Home />)

    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument()
    expect(screen.getAllByText(/Get Started/).length).toBeGreaterThanOrEqual(3)
  })

  it("renders navigation links", () => {
    render(<Home />)

    expect(screen.getAllByText("About").length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText("Services").length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText("Portfolio").length).toBeGreaterThanOrEqual(2)
  })

  it("renders the company logo alt text", () => {
    render(<Home />)

    const logos = screen.getAllByAltText("ZRAX SOFTWARES")
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })
})
