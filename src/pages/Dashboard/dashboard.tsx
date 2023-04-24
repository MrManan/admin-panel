import { useEffect, useState } from "react";
import user from "@/assets/icons/user.svg";
import video from "@/assets/icons/video.svg";
import category from "@/assets/icons/category.svg";
// import { getAllInstitution, getAllUsers } from "@/helper/backend_helper";
import { CircularProgress } from "@mui/material";

interface data {
  users: number;
  institutions: number;
  jobs: number;
  chats: number;
}
const Dashboard = (props: Props) => {
  const [data, setData] = useState<data>({
    users: 0,
    institutions: 0,
    jobs: 0,
    chats: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const users = await getAllUsers();
  //     const institutions = await getAllInstitution(1)
  //     setData({ ...data, users: users.data.data.length, institutions: institutions.data.data.length });
  //     setLoading(false)
  //   }
  //   getData();

  // }, [])
  return (
    <div className="content ">
      <div className="top-bar">
        <div className="intro-x breadcrumb mr-auto hidden sm:flex">
          <i data-feather="chevron-right" className="breadcrumb__icon"></i>
          <a href="" className="breadcrumb--active">
            Dashboard
          </a>
        </div>
      </div>

      <div className="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
        <div className="col-span-12 mt-8">
          <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y m-3">
              <div className="report-box zoom-in">
                <div className="box p-5">
                  <div className="flex">
                    <i
                      data-feather="shopping-cart"
                      className="report-box__icon text-theme-10"
                    ></i>
                    <div className="">
                      <div className="text-base text-gray-600 mt-1">Users</div>
                      <div className="text-3xl font-bold leading-8">
                        <Count loading={loading} count={data.chats} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end ">
                    <div className="bg-blue-100 p-10 rounded-lg">
                      <img src={user} width={50} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y m-3">
              <div className="report-box zoom-in">
                <div className="box p-5">
                  <div className="flex">
                    <i
                      data-feather="shopping-cart"
                      className="report-box__icon text-theme-10"
                    ></i>
                    <div className="">
                      <div className="text-base text-gray-600 mt-1">
                        Pending Videos
                      </div>
                      <div className="text-3xl font-bold leading-8">
                        <Count loading={loading} count={data.chats} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end ">
                    <div className="bg-red-100 p-10 rounded-lg">
                      <img src={video} width={50} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y m-3">
              <div className="report-box zoom-in">
                <div className="box p-5">
                  <div className="flex">
                    <i
                      data-feather="shopping-cart"
                      className="report-box__icon text-theme-10"
                    ></i>
                    <div className="">
                      <div className="text-base text-gray-600 mt-1">
                        Categories
                      </div>
                      <div className="text-3xl font-bold leading-8">
                        <Count loading={loading} count={data.chats} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end ">
                    <div className="bg-green-200 p-10 rounded-lg">
                      <img src={category} width={50} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

type Props = {
  loading: boolean;
  count: any;
};

const Count: React.FC<Props> = ({ loading, count }) => {
  return loading ? <CircularProgress size="1em" color="warning" /> : count;
};
