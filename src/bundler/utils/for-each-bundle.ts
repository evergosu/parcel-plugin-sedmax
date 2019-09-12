import Bundler from 'parcel-bundler';

export default function forEachBundle(
  fn: (x: Bundler.ParcelBundle) => void,
  bundle: Bundler.ParcelBundle,
) {
  fn(bundle);

  if (bundle.childBundles.size) {
    bundle.childBundles.forEach(childBundle => {
      fn(childBundle);
    });
  }
}
