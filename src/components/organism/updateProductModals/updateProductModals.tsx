import CardINputProduct from "../../molecule/cardInputProduct/cardINputProduct";

interface UpdateProductModalsProps {
  close: (e: boolean) => void;
}
const UpdateProductModals = ({ close }: UpdateProductModalsProps) => {
  return (
    <div className="w-screen h-screen fixed z-10 top-0 left-0 bg-black bg-opacity-30 flex items-center justify-center">
      <CardINputProduct success={close} type="edit" />
    </div>
  );
};

export default UpdateProductModals;
