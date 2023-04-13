import Dashboard from "./dashboard";
import Layout from "@/components/layouts";

interface Props {
  loading: boolean;
  count: number;
}
const index = (props: Props) => {
  return (
    <Layout>
      <Dashboard loading={true} count />
    </Layout>
  );
};

export default index;
