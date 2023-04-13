import PendingVideos from "@/pages/PendingVideo/PendingVideos";
import Layout from "@/components/layouts";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <PendingVideos />
    </Layout>
  );
};

export default index;
