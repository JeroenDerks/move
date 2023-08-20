import { PageLayout } from "@/components/PageLayout";
import StylingThemeProvider from "./theme-provider";
import StyledComponentsRegistry from "@/lib/registery";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <StylingThemeProvider>
            <PageLayout>{children}</PageLayout>
          </StylingThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
