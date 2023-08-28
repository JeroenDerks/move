import StyledComponentsRegistry from "@/lib/registery";
import { PageLayout } from "@/components/PageLayout";
import StylingThemeProvider from "./theme-provider";
import { theme } from "@/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: theme.colors.grey, margin: 0 }}>
        <StyledComponentsRegistry>
          <StylingThemeProvider>
            <PageLayout>{children}</PageLayout>
          </StylingThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
