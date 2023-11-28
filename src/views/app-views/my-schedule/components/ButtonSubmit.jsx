import { Button } from "antd";

export default function ButtonSubmit({ date, openHandler }) {
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
          onClick={openHandler}
        >
          Simpan Perubahan
        </Button>
      ) : (
        <Button
          id="button-submit"
          type="primary"
          className="bg-green-500 px-10 pb-8 pt-2 hover:bg-green-600 disabled:bg-grey-100 disabled:text-grey-200"
          onClick={openHandler}
        >
          Simpan Perubahan
        </Button>
      )}
    </>
  );
}
