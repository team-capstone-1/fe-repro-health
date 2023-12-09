import { Button } from "antd";

export default function ButtonSubmit({ htmlType, date }) {
  const isDatePassed = (date) => {
    const newDate = new Date(date);
    const today = new Date();
    return newDate < today;
  };

  return (
    <>
      {isDatePassed(date) ? (
        <Button
          id="button-submit"
          type="primary"
          className="bg-green-500 px-10 pb-8 pt-2 hover:bg-green-600 disabled:bg-grey-100 disabled:text-grey-200"
          disabled
        >
          Simpan Perubahan
        </Button>
      ) : (
        <Button
          htmlType={htmlType}
          id="button-submit"
          type="primary"
          className="bg-green-500 px-10 pb-8 pt-2 hover:bg-green-600 disabled:bg-grey-100 disabled:text-grey-200"
        >
          Simpan Perubahan
        </Button>
      )}
    </>
  );
}
