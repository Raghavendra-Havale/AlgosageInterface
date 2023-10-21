import { useDispatch, useSelector } from "react-redux";
import errorStatus from "../../assets/images/errorstatus.svg";
import loadingStatus from "../../assets/images/loadingStatus.svg";
import successStatus from "../../assets/images/successStatus.svg";
import { updateNotifications } from "../../state/slice";
import { InfoSpan } from "./util";

export default function NotificationOverlay() {
  const { notifications } = useSelector((state) => state.app);
  const { loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const allNotifications = [...notifications, loading];
  const icons = {
    error: errorStatus,
    loading: loadingStatus,
    successful: successStatus,
    warning: "",
  };

  function close(index) {
    const returnArr = notifications.map((item, num) => {
      if (num === index) return { ...item, overlay: false };
      return item;
    });
    dispatch(updateNotifications(returnArr));
  }

  return (
    <>
      {allNotifications.map((notification, index) => {
        if (notification.overlay)
          return (
            <div
              key={index}
              className={
                " flex absolute backdrop-blur-sm backdrop-brightness-50 w-screen h-screen shadow z-[250]"
              }
            >
              <div className="flex flex-col self-center mx-auto mt-[-7rem] rounded-md bg-[#131114] gap-4 p-6">
                <div className="mx-auto flex font-semibold">
                  {notification?.header}
                </div>
                <div className="flex flex-col">
                  <div className=" flex mx-auto min-w-[20rem]">
                    <img
                      className={
                        "w-[10rem] h-[10rem] mx-auto self-center py-4" +
                        (notification?.type === "loading"
                          ? " animate-spin "
                          : "")
                      }
                      src={icons[notification.type]}
                      alt={"loading"}
                    />
                  </div>
                  <div className="capitalize font-medium flex gap-2 flex-row mx-auto">
                    {notification.info &&
                      notification.info.map((info, index) => {
                        return (
                          <InfoSpan
                            overlay={true}
                            key={index}
                            info={info}
                            bulletPoint={notification.bulletPoint}
                            type={notification.type}
                          />
                        );
                      })}
                  </div>
                </div>

                <div className="flex justify-between gap-4">
                  {/* {notification.type !== "loading" && ( */}
                  <button
                    onClick={() => close(index)}
                    className="bg-light/10 hover:bg-light/30 p-2 text-[0.875rem] font-semibold text-orange w-1/3 mx-auto rounded-md"
                  >
                    Close
                  </button>
                  {/* )} */}
                </div>
              </div>
            </div>
          );
      })}
    </>
  );
}
