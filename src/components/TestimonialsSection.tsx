import TagLine from "./TagLine";

const TestimonialsSection = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <TagLine>Testimonials</TagLine>
      <h2 className="text-3xl font-bold text-center mt-3 mb-8 font-display">
        What builders say about us
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left font-display">
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex gap-3 items-center mb-3">
              <img
                src="testimonials/1.png"
                alt=""
                className="h-12 rounded-full"
              />
              <p>User</p>
            </div>
            <p className="text-pretty text-sm space-y-4">
              <span>
                Implementing LYFT was a game-changer; it simplifies monitoring
                and provides actionable insights that have significantly
                improved our marketing effectiveness.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex gap-3 items-center mb-3">
              <img
                src="testimonials/2.png"
                alt=""
                className="h-12 rounded-full"
              />
              <p>User</p>
            </div>
            <p className="text-pretty text-sm space-y-4">
              <span>
                At our startup, LYFT has been instrumental in understanding our
                users better. Its comprehensive monitoring tools have allowed us
                to track user behavior effectively and adjust our strategies
                accordingly. With LYFT, we feel confident in our ability to
                scale and meet the evolving needs of our customers.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex gap-3 items-center mb-3">
              <img
                src="testimonials/3.png"
                alt=""
                className="h-12 rounded-full"
              />
              <p>User</p>
            </div>
            <p className="text-pretty text-sm space-y-4">
              <span>
                LYFT's intuitive interface and robust features make it
                indispensable for scaling our SaaS product efficiently. It's
                exceeded our expectations in driving user engagement and
                conversions.
              </span>
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex gap-3 items-center mb-3">
              <img
                src="testimonials/4.png"
                alt=""
                className="h-12 rounded-full"
              />
              <p>User</p>
            </div>
            <p className="text-pretty text-sm space-y-4">
              <span>
                LYFT helped us boost user engagement and conversions
                effortlessly. Highly recommended!
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex gap-3 items-center mb-3">
              <img
                src="testimonials/5.png"
                alt=""
                className="h-12 rounded-full"
              />
              <p>User</p>
            </div>
            <p className="text-pretty text-sm space-y-4">
              <span>
                LYFT's advanced monitoring capabilities have been invaluable for
                understanding customer behavior and refining our strategies.
                It's a crucial tool for any SaaS company aiming for sustainable
                growth.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex gap-3 items-center mb-3">
              <img
                src="testimonials/6.png"
                alt=""
                className="h-12 rounded-full"
              />
              <p>User</p>
            </div>
            <p className="text-pretty text-sm space-y-4">
              <span>
                Since implementing LYFT into our SaaS strategy, we've seen a
                remarkable uptick in customer engagement and retention. Its
                sophisticated monitoring capabilities coupled with effective
                outreach tools have been instrumental in our growth journey.
              </span>
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex gap-3 items-center mb-3">
              <img
                src="testimonials/7.png"
                alt=""
                className="h-12 rounded-full"
              />
              <p>User</p>
            </div>
            <p className="text-pretty text-sm space-y-4">
              <span>
                I can't imagine managing our SaaS growth without LYFT. It
                simplifies everything from customer insights to campaign
                management, allowing us to focus more on innovation while
                ensuring our marketing efforts are targeted and effective.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex gap-3 items-center mb-3">
              <img
                src="testimonials/8.png"
                alt=""
                className="h-12 rounded-full"
              />
              <p>User</p>
            </div>
            <p className="text-pretty text-sm space-y-4">
              <span>
              Using LYFT has streamlined our workflow, allowing us to focus more on innovation. Its comprehensive analytics have empowered us to make informed decisions that resonate with our users.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex gap-3 items-center mb-3">
              <img
                src="testimonials/9.png"
                alt=""
                className="h-12 rounded-full"
              />
              <p>User</p>
            </div>
            <p className="text-pretty text-sm space-y-4">
              <span>
              LYFT's analytics are invaluable for optimizing our marketing efforts.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
