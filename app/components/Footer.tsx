import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

interface Props {
  emailAddress?: string;
  phoneNumber?: string;

  socialMedia: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
    tiktok?: string;
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
    </div>
  )

  return (
    <div className='bg-black text-emerald-400'>
      <div className="flex flex-col md:flex-row md:justify-between items-center text-center space-y-8 md:space-y-0 py-8 container mx-auto">
        {socials}
        <div className="flex flex-col md:text-right">
          <span>© 2024, Khai's Big World</span>
          <div>
            {/* TODO: Add link to personal website/github */}
            Designed by <span className="cursor-pointer italic">Khai Fahmi Zaki</span>
            {/* TODO: Add link to agency */}
            <span className="agency-link"></span>
          </div>
        </div>
      </div>
    </div>
  )
}