import CardINputProduct from "../../molecule/cardInputProduct/cardINputProduct";

interface AddProductModalsProps {
  close: (e: boolean) => void;
}
const AddProductModals = ({ close }: AddProductModalsProps) => {
  return (
    <div className="w-screen h-screen fixed z-10 top-0 left-0 bg-black bg-opacity-30 flex items-center justify-center">
      <CardINputProduct success={close} type="add" />
    </div>
  );
};

export default AddProductModals;
