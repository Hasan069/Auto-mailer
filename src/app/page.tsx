import ContactFormPage from "@/components/ContactFormPage";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <ContactFormPage />
    </div>
  );
}
