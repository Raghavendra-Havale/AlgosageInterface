import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";

import { InfoSpan } from "./util";
import { updateNotifications } from "../../state/slice";

export default function Notifications() {
  let { notifications } = useSelector((state) => state.app);
  const { loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  if (loading?.info) {
    notifications = [...notifications, loading];
  }

  const color = {
    error: " bg-red-500",
    warning: " bg-yellow-500",
    normal: " bg-blue-600 ",
    successful: " bg-green-600",
    loading: " bg-blue-400",
  };

  function close(index) {
    if (index === "all") {
      dispatch(updateNotifications([]));
      return;
    }

    const returnArr = notifications.filter((item, num) => {
      if (num !== index) return item;
    });
    dispatch(updateNotifications(returnArr));
  }

  function NotificationCard({ notification, index }) {
    return (
      <div className="min-h-[4rem] shadow text-center rounded-md flex bg-[#131114] gap-2 ">
        <div className={"w-2 rounded-l-md " + color[notification.type]}></div>
        <div className="flex flex-col justify-between w-full relative pr-2">
          {notification?.header ? (
            <div className="flex justify-between w-full px-2 pt-2">
              <span className="text-[0.875rem] font-semibold">
                {notification?.header}
              </span>
              <button
                onClick={() => {
                  close(index);
                }}
                className="my-auto"
              >
                {notification.type !== "loading" && <AiOutlineClose />}
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                close(index);
              }}
              className="absolute top-0 right-0 p-2 flex"
            >
              {notification.type !== "loading" && <AiOutlineClose />}
            </button>
          )}
          <div className="flex flex-col justify-around gap-[0.1rem] p-2 text-[0.875rem] my-auto">
            {notification?.info?.map((info, index) => {
              return (
                <InfoSpan
                  key={index}
                  info={info}
                  bulletPoint={notification.bulletPoint}
                  type={color[notification?.type]}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  NotificationCard.propTypes = {
    notification: PropTypes.object,
    index: PropTypes.number,
  };

  return (
    <>
      <div
        className={
          "flex flex-col absolute right-0 bottom-0 gap-2 w-[22rem] rounded-md p-4 z-[500] " +
          (notifications?.length > 1 && " bg-white/20")
        }
      >
        <button
          onClick={() => {
            close("all");
          }}
          className={
            "self-end h-[2rem] w-[7rem] rounded-md bg-[#131114] text-[0.875rem] " +
            (!(notifications?.length > 1) && " hidden")
          }
        >
          clear all
        </button>

        {notifications?.map((info, index) => {
          return (
            <NotificationCard key={index} notification={info} index={index} />
          );
        })}
      </div>
    </>
  );
}
