import { useRouter } from "next/router";

export default function TourDetails() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Detalles de los Tours: {slug}</h1>
      <p>Aquí van los detalles específicos de cada tour.</p>
    </div>
  );
}
