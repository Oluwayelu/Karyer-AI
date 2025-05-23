import { Card, CardContent } from "@/components/ui/card";

const CareerTracks = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Find Your Track
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            label: "Students",
            desc: "Explore career paths and prepare to enter the job market.",
          },
          {
            label: "Professionals",
            desc: "Advance your career or pivot roles with clear guidance.",
          },
          {
            label: "Job Seekers",
            desc: "Boost your applications and interview readiness.",
          },
        ].map(({ label, desc }, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{label}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CareerTracks;
