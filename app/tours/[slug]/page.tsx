import { useRouter } from "next/router";

export default function TourDetails() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Detalles del Tour: {slug}</h1>
      <p>Aquí van los detalles específicos del tour.</p>
    </div>
  );
}
