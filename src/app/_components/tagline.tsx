export default function Tagline({ center = false }) {
  return (
    <div className="content-center">
      <h2 className={`${center && 'text-center'} mt-4 text-xl font-bold`}>
        Full-Stack Software Engineer.
      </h2>
      <h2 className={`${center && 'text-center'} my-1 text-lg font-bold`}>
        Builder | Tinkerer
      </h2>
      <h2
        className={`${center && 'text-center'} text-md my-4 font-semibold tracking-wide`}
      >
        Always Curious, Forever Hungry.
      </h2>
    </div>
  );
}
