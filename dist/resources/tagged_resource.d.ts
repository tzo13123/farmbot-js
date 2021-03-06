import { Crop, DeviceAccountSettings, FarmEvent, FarmwareEnv, FarmwareInstallation, Folder, GenericPointer, Image, Log, Peripheral, PinBinding, PlantPointer, PlantTemplate, PointGroup, Regimen, SavedGarden, Sensor, SensorReading, SequenceResource, Tool, ToolSlotPointer, User, WebcamFeed, WeedPointer } from "./api_resources";
import { FbosConfig } from "./configs/fbos";
import { FirmwareConfig } from "./configs/firmware";
import { WebAppConfig } from "./configs/web_app";
import { Alert } from "../interfaces";
export declare type ResourceName = "Alert" | "Crop" | "Device" | "FarmEvent" | "FarmwareEnv" | "FarmwareInstallation" | "FbosConfig" | "FirmwareConfig" | "Folder" | "Image" | "Log" | "Peripheral" | "PinBinding" | "Plant" | "PlantTemplate" | "Point" | "PointGroup" | "Regimen" | "SavedGarden" | "Sensor" | "SensorReading" | "Sequence" | "Tool" | "User" | "WebAppConfig" | "WebcamFeed";
export interface TaggedResourceBase {
    kind: ResourceName;
    /** Unique identifier and index key.
     * We can't use the object's `id` attribute as a local index key because
     * unsaved objects don't have one.
     */
    uuid: string;
    body: object;
    /** Indicates if the resource is saved, saving or dirty.
     * `undefined` denotes that the resource is saved. */
    specialStatus: SpecialStatus;
}
/** Denotes special status of resource */
export declare enum SpecialStatus {
    /** The local copy is different than the one on the remote end. */
    DIRTY = "DIRTY",
    /** The local copy is being saved on the remote end right now? */
    SAVING = "SAVING",
    /** API and FE are in sync. Using "" for now because its falsey like old
     * `undefined` value */
    SAVED = ""
}
export interface Resource<T extends ResourceName, U extends object> extends TaggedResourceBase {
    kind: T;
    body: U;
}
export declare type TaggedResource = TaggedAlert | TaggedCrop | TaggedDevice | TaggedFarmEvent | TaggedFarmwareEnv | TaggedFarmwareInstallation | TaggedFbosConfig | TaggedFirmwareConfig | TaggedFolder | TaggedImage | TaggedLog | TaggedPeripheral | TaggedPinBinding | TaggedPlantTemplate | TaggedPoint | TaggedPointGroup | TaggedRegimen | TaggedSavedGarden | TaggedSensor | TaggedSensorReading | TaggedSequence | TaggedTool | TaggedUser | TaggedWebAppConfig | TaggedWebcamFeed;
declare type PointUnion = GenericPointer | PlantPointer | ToolSlotPointer | WeedPointer;
export declare type TaggedAlert = Resource<"Alert", Alert>;
export declare type TaggedCrop = Resource<"Crop", Crop>;
export declare type TaggedDevice = Resource<"Device", DeviceAccountSettings>;
export declare type TaggedFolder = Resource<"Folder", Folder>;
export declare type TaggedFarmEvent = Resource<"FarmEvent", FarmEvent>;
export declare type TaggedFarmwareEnv = Resource<"FarmwareEnv", FarmwareEnv>;
export declare type TaggedFarmwareInstallation = Resource<"FarmwareInstallation", FarmwareInstallation>;
export declare type TaggedFbosConfig = Resource<"FbosConfig", FbosConfig>;
export declare type TaggedFirmwareConfig = Resource<"FirmwareConfig", FirmwareConfig>;
export declare type TaggedGenericPointer = Resource<"Point", GenericPointer>;
export declare type TaggedImage = Resource<"Image", Image>;
export declare type TaggedLog = Resource<"Log", Log>;
export declare type TaggedPeripheral = Resource<"Peripheral", Peripheral>;
export declare type TaggedPinBinding = Resource<"PinBinding", PinBinding>;
export declare type TaggedPlantPointer = Resource<"Point", PlantPointer>;
export declare type TaggedPlantTemplate = Resource<"PlantTemplate", PlantTemplate>;
export declare type TaggedPoint = Resource<"Point", PointUnion>;
export declare type TaggedPointGroup = Resource<"PointGroup", PointGroup>;
export declare type TaggedRegimen = Resource<"Regimen", Regimen>;
export declare type TaggedSavedGarden = Resource<"SavedGarden", SavedGarden>;
export declare type TaggedSensor = Resource<"Sensor", Sensor>;
export declare type TaggedSensorReading = Resource<"SensorReading", SensorReading>;
export declare type TaggedSequence = Resource<"Sequence", SequenceResource>;
export declare type TaggedTool = Resource<"Tool", Tool>;
export declare type TaggedToolSlotPointer = Resource<"Point", ToolSlotPointer>;
export declare type TaggedUser = Resource<"User", User>;
export declare type TaggedWebAppConfig = Resource<"WebAppConfig", WebAppConfig>;
export declare type TaggedWebcamFeed = Resource<"WebcamFeed", WebcamFeed>;
export declare type TaggedWeedPointer = Resource<"Point", WeedPointer>;
export declare type PointerType = TaggedToolSlotPointer | TaggedGenericPointer | TaggedPlantPointer | TaggedWeedPointer;
export {};
