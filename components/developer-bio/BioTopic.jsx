import { AiOutlineRight } from 'react-icons/ai'


function BioTopic({topic}) {
  return (
    <article >
      <h2 className="text-base font-semibold tracking-tight text-zinc-800">
        {topic}
      </h2>

      <p className=" mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Man bun la croix sriracha gatekeep, stumptown mustache flannel tilde
        listicle ethical. Mixtape glossier cold-pressed gatekeep fixie readymade
        cliche franzen pinterest ramps 8-bit gentrify. Intelligentsia
        gluten-free vibecession 8-bit af mixtape man braid shoreditch. Raclette
        viral vexillologist, live-edge bushwick bespoke man braid single-origin
        coffee godard small batch cray edison bulb. Photo booth pinterest banjo
        portland, microdosing lomo roof party normcore.
      </p>
      <footer className="my-4 flex items-center text-sm font-medium text-teal-500">
        <h3>read more</h3>
         <AiOutlineRight className='text-base'/>
      </footer>
    </article>
  );
}

export default BioTopic;
