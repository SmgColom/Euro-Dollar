import Link from "next/link";
import Content from "../components/layout/HeroSection/Content";
import { Fragment } from "react";

function NotFoundPage() {
  return (
    <Fragment>
      <Content
        title="Hmm..."
        description="Página no encontrada, por favor vuelve al inicio."
        imageUrl="/Notfound.jpg"
      />

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link href="/">
          <span style={{ color: "#232f45", fontSize: "18px" }}>
            Volver al inicio
          </span>
        </Link>
      </div>
    </Fragment>
  );
}

export default NotFoundPage;

