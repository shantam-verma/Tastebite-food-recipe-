import Image from 'next/image';
import { getImage } from '@/app/utils/getImage';

export async function DynamicImage({ url, alt, className }) {
  const { base64, img } = await getImage(url);

  return (
    <Image
      {...img}
      alt={alt || ''}
      title={alt || ''}
      placeholder="blur"
      blurDataURL={base64}
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
