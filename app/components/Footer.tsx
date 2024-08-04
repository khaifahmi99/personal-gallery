import Link from "next/link";
import { IoIosLink, IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { Categories } from "./Categories";

interface Props {
  emailAddress?: string;
  phoneNumber?: string;

  socialMedia: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
    tiktok?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  }

  address?: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  }
}

export default function Footer({ socialMedia }: Props) {
  let socials = (
    <div className="flex flex-row space-x-4 items-center">
      {socialMedia.facebook && (
        <a target="_blank" href={socialMedia.facebook} className="hover:cursor-pointer opacity-75 hover:opacity-100">
          <IoLogoFacebook size='2em' />
        </a>
      )}
      {socialMedia.youtube && (
        <a target="_blank" href={socialMedia.youtube} className="hover:cursor-pointer opacity-75 hover:opacity-100">
          <IoLogoYoutube size='2em' />
        </a>

      )}
      {socialMedia.twitter && (
        <a target="_blank" href={socialMedia.twitter} className="hover:cursor-pointer opacity-75 hover:opacity-100">
          <IoLogoTwitter size='2em' />
        </a>
      )}
      {socialMedia.instagram && (
        <a target="_blank" href={socialMedia.instagram} className="hover:cursor-pointer opacity-75 hover:opacity-100">
          <IoLogoInstagram size='2em' />
        </a>
      )}
      {socialMedia.tiktok && (
        <a target="_blank" href={socialMedia.tiktok} className="hover:cursor-pointer opacity-75 hover:opacity-100">
          <IoLogoTiktok size='2em' />
        </a>
      )}
      {socialMedia.linkedin && (
        <a target="_blank" href={socialMedia.linkedin} className="hover:cursor-pointer opacity-75 hover:opacity-100">
          <IoLogoLinkedin size='2em' />
        </a>
      )}
      {socialMedia.github && (
        <a target="_blank" href={socialMedia.github} className="hover:cursor-pointer opacity-75 hover:opacity-100">
          <IoLogoGithub size='1.75em' />
        </a>
      )}
      {socialMedia.website && (
        <a target="_blank" href={socialMedia.website} className="hover:cursor-pointer opacity-75 hover:opacity-100">
          <IoIosLink size='1.75em' />
        </a>
      )}
    </div>
  )

  return (
    <div className='bg-grid'>
      <div className='bg-radial text-emerald-400'>
        <Categories />
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center space-y-8 md:space-y-0 py-8 container mx-auto">
          {socials}
          <div className="flex flex-col md:text-right">
            <span>© 2024, Khai&lsquo;s Big World</span>
            <div>
              Designed by <Link target="_blank" href={socialMedia.website ?? '/'} className="italic">Khai Fahmi Zaki</Link>
              {/* TODO: Add link to agency */}
              <span className="agency-link"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}