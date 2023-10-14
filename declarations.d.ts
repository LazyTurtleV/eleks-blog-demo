declare module '*.scss'; 

declare module "*.png" {
    const value: any;
    export default value;
}
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}