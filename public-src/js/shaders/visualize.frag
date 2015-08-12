precision highp float;
uniform sampler2D velocity;
uniform sampler2D pressure;
varying vec2 uv;

void main(){
    gl_FragColor = vec4(
        (texture2D(pressure, uv)).x*0.8,
        (texture2D(velocity, uv)*0.01).xy,
    1.0);
}