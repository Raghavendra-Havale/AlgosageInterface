import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function InfoSpan({ info, bulletPoint, type }) {
  return (
    <span className={" flex justify-start gap-2 "}>
      <span
        className={
          "rounded-full w-[0.4rem] h-[0.4rem] self-center " +
          (bulletPoint ? " flex " : " hidden ") +
          type
        }
      />
      <span className={"flex self-center text-[0.875rem] break-all text-left"}>
        {typeof info?.link === "string" ? (
          <Link
            className="text-blue-400 underline flex text-[0.75rem]"
            to={info.link}
          >
            {info.text}
          </Link>
        ) : (
          info
        )}
      </span>
    </span>
  );
}
InfoSpan.propTypes = {
  info: PropTypes.any,
  bulletPoint: PropTypes.bool,
  type: PropTypes.string,
};
