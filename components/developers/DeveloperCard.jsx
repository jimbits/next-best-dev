import Image from "next/image";
import Link from "next/link"
function DeveloperCard({
  fullName,
  avatar,
  jobTitle,
  experience,
  availability,
  uid
}) {
  const variants = {
    available: "bg-lime-400 rounded-md px-3 py-1 text-sm text-lime-50",
    unavailable: "bg-red-400 rounded-md px-3 py-1 text-sm text-red-50",
  };
  return (
    <aside
      className="w-full m-4 sm:m-0 sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(33%_-_1rem)]  
           py-10 border border-gray-200/50 rounded-md shadow-md   "
    >
     <Link href={`/developer/${uid}`}>
        <header className="flex flex-col items-center  ">
          <Image
            src={avatar}
            width={120}
            height={120}
            alt={fullName}
            className="rounded-full border border-gray-400/20 p-1 bg-gray-400/10"
          />
          <h2 className="text-3xl  font-semibold text-gray-800">{fullName}</h2>
        </header>
        <dl className="flex flex-col items-center text-gray-400 text-sm">
          <dt className="sr-only">Job Title</dt>
          <dd className="text-lg text-gray-600 font-semibold">{jobTitle}</dd>
  
          <dt className="sr-only">Experience</dt>
          <dd className="mb-4">{experience} years </dd>
  
          <dt className="sr-only">Availability</dt>
          <dd
            className={` ${
              availability ? variants.available : variants.unavailable
            }`}
          >
            {availability ? "available" : " unavailable"}
          </dd>
        </dl>
     </Link>
    </aside>
  );
}

export default DeveloperCard;
