export function ConnectionsCard() {
  return (
    <div className="flex flex-initial flex-col flex-wrap items-stretch">
      <div className="h-10 text-md w-auto relative flex items-center px-4 justify-between text-white bg-zinc-700 rounded">
        <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
          {/* GitHub Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0001 2.00001C9.62368 1.99759 7.32411 2.84152 5.51345 4.38057C3.70279 5.91961 2.49939 8.05316 2.1189 10.3989C1.73842 12.7446 2.20572 15.1491 3.43706 17.1816C4.66841 19.2141 6.58331 20.7416 8.8386 21.4905C9.34198 21.5826 9.52 21.2695 9.52 21.0055V19.3051C6.72688 19.9128 6.13756 17.9607 6.13756 17.9607C5.95226 17.3557 5.5586 16.8359 5.02645 16.4936C4.12406 15.8797 5.10012 15.8797 5.10012 15.8797C5.41644 15.9244 5.71846 16.0404 5.98328 16.2191C6.24811 16.3978 6.46881 16.6344 6.62866 16.911C6.76449 17.1573 6.94761 17.3743 7.16752 17.5497C7.38743 17.725 7.6398 17.8552 7.91015 17.9328C8.18049 18.0103 8.4635 18.0337 8.74292 18.0017C9.02234 17.9696 9.29268 17.8827 9.53842 17.7459C9.57695 17.2409 9.79466 16.7662 10.1523 16.4076C7.93007 16.1559 5.59735 15.2965 5.59735 11.4966C5.58209 10.504 5.94915 9.54349 6.62252 8.814C6.32262 7.95091 6.35767 7.00668 6.72074 6.16821C6.72074 6.16821 7.56175 5.8981 9.47089 7.19338C11.1103 6.74326 12.8407 6.74326 14.4801 7.19338C16.3892 5.8981 17.2241 6.16821 17.2241 6.16821C17.5922 6.99781 17.6361 7.93527 17.3469 8.79558C18.0203 9.52507 18.3873 10.4856 18.3721 11.4782C18.3721 15.3211 16.0332 16.1621 13.8048 16.3892C14.0438 16.6294 14.2283 16.9181 14.3459 17.2359C14.4634 17.5536 14.5113 17.8929 14.4862 18.2308V20.9748C14.4862 21.3002 14.6643 21.5519 15.1738 21.4537C17.4034 20.685 19.2896 19.1531 20.4992 17.1286C21.7088 15.104 22.164 12.7171 21.7842 10.3895C21.4045 8.06189 20.2143 5.94338 18.424 4.40825C16.6336 2.87311 14.3583 2.02013 12.0001 2.00001Z"
              fill="white"
            />
          </svg>

          <span className="text-md font-semibold text-normal text-white">whoisniskii</span>

          {/* Verified Icon */}
          <div className="w-[16px] h-[16px]">
            <svg aria-hidden="false" role="img" width="16" height="16" viewBox="0 0 16 15.2">
              <path
                fill="hsl(217, calc(var(--saturation-factor, 1) * 7.6%), 33.5%)"
                fillRule="evenodd"
                d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
              />
              <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Arrow Link */}
        <a href="https://github.com/whoisniskii">
          <svg aria-hidden="true" role="img" width="24" height="24" className="rotate-45" viewBox="0 0 24 24">
            <polygon fill="currentColor" fillRule="nonzero" points="13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8" />
          </svg>
        </a>
      </div>
    </div>
  );
}
