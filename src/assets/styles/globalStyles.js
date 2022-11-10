const styles = {
  flexCenter: "flex justify-center items-center",
  flexBetween: "flex justify-between items-center",
  tabStyles:
    "rounded border border-gray-700 bg-gray-300  p-2 shadow-sm text-center hover:border-gray-400",

  paddingX: "sm:px-6 lg:px-4 px-2",
  paddingY: "py-6 ",
  padding: " px-6 py-6",

  marginX: "sm:mx-6 lg:mx-4 mx-2",
  marginY: "my-6 ",
};

export const containerStyle = {
  mainContainer: " w-full p-4 overflow-auto",
};

export const buttonStyle = {
  fillButton:
    "bg-blue-500 hover:bg-blue-700 text-primary font-semibold py-2 px-4 rounded",
  outlineButton:
    "bg-white hover:bg-blue-500 hover:text-primary text-gray-800 font-semibold py-2 px-4 border border-blue-500 rounded shadow",
  blockButton:
    "bg-red hover:bg-deepred text-primary font-semibold py-2 px-4 rounded",
  blacklistButton:
    "bg-black hover:bg-lightBlack text-primary font-semibold py-2 px-4 rounded",
};

export const textStyles = {
  mainHeading: "font-semibold text-[24px] text-lightBlack",
  subHeading: "font-semibold text-primary text-[18px] leading-[23.4px] mb-1",
  infoText: "text-[20px] font-semibold",
};

export const tableStyles = {
  mainTable: `w-full text-center border-collapse border border-gray-300`,
  tableHead: "px-6 py-3 bg-lightBlack text-primary text-center font-semibold",
  tableRow: "border-b border-gray-200",
  tableData: "px-6 py-4 bg-gray-300 whitespace-nowrap",
};

export default styles;