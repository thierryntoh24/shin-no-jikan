import { getTheme } from "@/utils/get-theme";

export default function Page() {
  const theme = getTheme();

  const Layout = theme.components.Layout;
  const Home = theme.components.Home;

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
